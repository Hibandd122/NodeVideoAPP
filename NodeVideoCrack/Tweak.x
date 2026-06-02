#import <Foundation/Foundation.h>

// Móc vào NSUserDefaults để trả về giá trị YES/true cho các key bản quyền PRO
%hook NSUserDefaults

- (BOOL)boolForKey:(NSString *)defaultName {
    if ([defaultName isEqualToString:@"EntitlementStatus:pro_yearly"] || 
        [defaultName isEqualToString:@"EntitlementStatus:pro_permanent"] ||
        [defaultName isEqualToString:@"ProvideLifetimeMember"] ||
        [defaultName isEqualToString:@"FirstRun"]) {
        return YES;
    }
    return %orig;
}

- (id)objectForKey:(NSString *)defaultName {
    if ([defaultName isEqualToString:@"EntitlementStatus:pro_yearly"] || 
        [defaultName isEqualToString:@"EntitlementStatus:pro_permanent"] ||
        [defaultName isEqualToString:@"ProvideLifetimeMember"] ||
        [defaultName isEqualToString:@"FirstRun"]) {
        return @YES;
    }
    return %orig;
}

- (NSInteger)integerForKey:(NSString *)defaultName {
    if ([defaultName isEqualToString:@"EntitlementStatus:pro_yearly"] || 
        [defaultName isEqualToString:@"EntitlementStatus:pro_permanent"] ||
        [defaultName isEqualToString:@"ProvideLifetimeMember"] ||
        [defaultName isEqualToString:@"FirstRun"]) {
        return 1;
    }
    return %orig;
}

%end
