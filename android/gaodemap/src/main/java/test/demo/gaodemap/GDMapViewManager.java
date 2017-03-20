package test.demo.gaodemap;

import android.view.View;

import com.amap.api.maps.AMap;
import com.amap.api.maps.MapView;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

/**
 * Created by challenger on 20/3/2017.
 */

public class GDMapViewManager extends ViewGroupManager {
  private static final String REACT_CLASS = "GaodeMapView";

  private ThemedReactContext mReactContext;

  private AMap aMap;
  private MapView mapView;


  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected View createViewInstance(ThemedReactContext reactContext) {
    mReactContext = reactContext;
    mapView = new MapView(reactContext);
    if (aMap == null) {
      aMap = mapView.getMap();
    }

    return mapView;
  }

  @Override
  public void updateExtraData(View root, Object extraData) {

  }
}
