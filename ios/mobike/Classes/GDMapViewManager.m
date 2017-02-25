//
//  GDMapViewManager.m
//  mobike
//
//  Created by Uncle Charlie on 25/2/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "GDMapViewManager.h"
#import "GDMapView.h"

@implementation GDMapViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [GDMapView new];
}

@end
