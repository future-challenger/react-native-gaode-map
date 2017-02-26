//
//  GDPointAnnotationView.h
//  mobike
//
//  Created by Uncle Charlie on 26/2/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MAMapKit/MAMapKit.h>

/**
 If you use default pin, there're only three colors.
 So this enum is equivalent to the color enum defined in `MAMapKit`.
 */
typedef NS_ENUM(NSInteger, GDAnnotaionViewCategory) {
  GDAnnotationViewCategoryUser,
  GDAnnotationViewCategoryDefault,
  GDAnnotationViewCategoryLite,
};

@interface GDPointAnnotation : MAPointAnnotation

@property(nonatomic, assign) GDAnnotaionViewCategory category;

@end
