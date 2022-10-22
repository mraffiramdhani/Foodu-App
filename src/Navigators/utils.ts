import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from '../Types/Navigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const navigationRef = createNavigationContainerRef();

export function navigateAndSimpleReset(
  name: keyof ReactNavigation.RootParamList,
  index = 0,
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    );
  }
}
