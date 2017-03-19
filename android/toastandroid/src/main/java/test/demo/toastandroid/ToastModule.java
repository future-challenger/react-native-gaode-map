package test.demo.toastandroid;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by challenger on 19/3/2017.
 */

public class ToastModule extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  /**
   * 返回一个字符串，JavaScript用来标记这个模块。
   * <strong>注意：</strong>返回的命成如果包含RCT的话，会被移除。
   * 也就是，如果返回的是RCTToastAndroid的话，在JS端使用的还是ToastAndroid。
   *
   * @return 模块名称，在React Native的js部分使用
   */
  @Override
  public String getName() {
    return "AnotherToastAndroid";
  }

  /**
   * [可选方法]，导出给JS使用的常量。
   *
   * @return
   */
  @Nullable
  @Override
  public Map<String, Object> getConstants() {
//    return super.getConstants();
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

  /**
   * <strong>注意</strong>如果方法要给JS使用的话，需要添加注解@ReactMethod。方法的返回类型必须为void。
   * 如果要返回一个值的话，只能使用回调方法或者发送事件。
   *
   * @param message
   * @param duration
   */
  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }

  @ReactMethod
  public void currentThreadName(Callback errorCallback, Callback successCallback) {
    try {
      String tn = Thread.currentThread().getName();
      successCallback.invoke(tn);
    } catch(Exception e) {
      errorCallback.invoke(e.getMessage());
    }
  }
}
