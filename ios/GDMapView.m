//
//  GDMapView.m
//  mobike
//
//  Created by Uncle Charlie on 25/2/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "GDMapView.h"
#import <React/RCTConvert>

@interface GDMapView()

- (void)hideCompass;

@end

@implementation GDMapView

- (void)setZoom:(float)zoom {
  [self setZoomLevel:zoom animated:YES];
}

- (void)setCenter:(NSDictionary *)coordinateObj {
  double lat = [RCTConvert double:coordinateObj[@"lat"]];
  double lng = [RCTConvert double:coordinateObj[@"lng"]];
  CLLocationCoordinate2D point = CLLocationCoordinate2DMake(lat, lng);
  [self setCenterCoordinate:point animated:YES];
}

- (void)setMarker:(NSDictionary *)Options {
  
}

#pragma mark - Private methods

- (void)hideCompass {
  self.hideCompass = YES;
}

@end
