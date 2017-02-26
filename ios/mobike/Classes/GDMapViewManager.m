//
//  GDMapViewManager.m
//  mobike
//
//  Created by Uncle Charlie on 25/2/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "GDMapViewManager.h"
#import "GDMapView.h"
#import <MAMapKit/MAMapKit.h>
#import <AMapFoundationKit/AMapFoundationKit.h>

@interface GDMapViewManager()<MAMapViewDelegate>

@end

@implementation GDMapViewManager

RCT_EXPORT_MODULE(GDMapView)

RCT_EXPORT_VIEW_PROPERTY(mapType, int)
RCT_EXPORT_VIEW_PROPERTY(zoom, float)
RCT_EXPORT_VIEW_PROPERTY(marker, NSDictionary*)
RCT_EXPORT_VIEW_PROPERTY(markers, NSArray*)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)
RCT_CUSTOM_VIEW_PROPERTY(center, CLLocationCoordinate2D, RCTBaiduMapView) {
  [view setCenterCoordinate:json ? [RCTConvert CLLocationCoordinate2D:json] : defaultView.centerCoordinate];
}

- (UIView *)view {
  GDMapView *mapView = [GDMapView new];
  mapView.delegate = self;
  // MAMapView *mapView = [[MAMapView alloc] init];
  mapView.showsUserLocation = YES;
  mapView.userTrackingMode = MAUserTrackingModeFollow;
  
  return mapView;
}

- (MAAnnotationView *)mapView:(MAMapView *)mapView viewForAnnotation:(id<MAAnnotation>)annotation {
  
}

@end
