//
//  GDMapView.m
//  mobike
//
//  Created by Uncle Charlie on 25/2/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "GDMapView.h"
#import <React/RCTConvert.h>
#import "GDPointAnnotation.h"

@interface GDMapView ()

@property(nonatomic, strong) MAPointAnnotation *annotation;
@property(nonatomic, strong) NSMutableArray<__kindof MAPointAnnotation *> *annotations;

- (void)addMarker:(MAPointAnnotation *)annotation options:(NSDictionary *)options;
- (void)updateMarker:(MAPointAnnotation *)annotation options:(NSDictionary *)options;
- (GDPointAnnotation *)getPointAnnotationFromOption:(NSDictionary *)option;

@end

@implementation GDMapView

- (void)setZoom:(float)zoom {
  [self setZoomLevel:zoom animated:YES];
}

- (void)setShowScale:(BOOL)show {
  self.showsScale = show;
}

//- (void)setCenter:(NSDictionary * _Nonnull)coordinateObj {
//  double lat = [RCTConvert double:coordinateObj[@"lat"]];
//  double lng = [RCTConvert double:coordinateObj[@"lng"]];
//  CLLocationCoordinate2D point = CLLocationCoordinate2DMake(lat, lng);
//  [self setCenterCoordinate:point animated:YES];
//}

- (void)setMarker:(NSDictionary *)option {
  if (!option) {
    return;
  }

  if (!_annotation) {
    _annotation = [GDPointAnnotation new];
    [self addMarker:_annotation options:option];
  } else {
    [self updateMarker:_annotation options:option];
  }
}

- (void)setMarkers:(NSArray<NSDictionary *> *)options {
  if (!options) {
    return;
  }

//  NSInteger count = [options count];
  if (!_annotations) {
    _annotations = [[NSMutableArray alloc] init];
  } else {
    [_annotations removeAllObjects];
  }
  
  for(NSDictionary *option in options) {
    GDPointAnnotation *annotation = [self getPointAnnotationFromOption:option];
    [_annotations addObject:annotation];
  }
  
  [self addAnnotations:_annotations];

//  for (int i = 0; i < count; i++) {
//    NSDictionary *option = [options objectAtIndex:i];
//    GDPointAnnotation *annotation = nil;
//
//    if (i < [_annotations count]) {
//      annotation = [_annotations objectAtIndex:i];
//    }
//
//    if (!annotation) {
//      annotation = [GDPointAnnotation new];
//      [self addMarker:annotation options:option];
//      [_annotations addObject:annotation];
//    } else {
//      [self updateMarker:annotation options:option];
//    }
//  }
//
//  NSInteger annotationsCount = [_annotations count];
//  if (count < annotationsCount) {
//    NSInteger start = annotationsCount - 1;
//    for (NSInteger i = start; i >= count; i--) {
//      GDPointAnnotation *annotation = [_annotations objectAtIndex:i];
//      [self removeAnnotation:annotation];
//      [_annotations removeObject:annotation];
//    }
//  }
}

#pragma mark - Private methods

- (void)addMarker:(__kindof GDPointAnnotation *)annotation options:(NSDictionary *)options {
  [self updateMarker:annotation options:options];
//  MAPointAnnotation *mapAnnotation = (MAPointAnnotation *)annotation;
//  [self setCenterCoordinate:annotation.coordinate animated:YES];
  [self addAnnotation:annotation];
}

- (void)updateMarker:(GDPointAnnotation *)annotation options:(NSDictionary *)options {
  CLLocationCoordinate2D coordinate = [self getCoordinateFromOptions:options];
  NSInteger category = [RCTConvert NSInteger:options[@"category"]];

  annotation.coordinate = coordinate;
  annotation.category = category;
}

- (CLLocationCoordinate2D)getCoordinateFromOptions:(NSDictionary *)options {
  double lat = [RCTConvert double:options[@"latitude"]];
  double lng = [RCTConvert double:options[@"longitude"]];

  CLLocationCoordinate2D coordinate;
  coordinate.latitude = lat;
  coordinate.longitude = lng;

  return coordinate;
}

- (GDPointAnnotation *)getPointAnnotationFromOption:(NSDictionary *)option {
  GDPointAnnotation *annotation = [GDPointAnnotation new];
  [self updateMarker:annotation options:option];
  return annotation;
}

@end
