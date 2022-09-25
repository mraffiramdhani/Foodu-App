import {StyleSheet} from 'react-native';

const Layout = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsStretch: {
    alignItems: 'stretch',
  },
  itemsBaseline: {
    alignItems: 'baseline',
  },
  contentStart: {
    alignContent: 'flex-start',
  },
  contentEnd: {
    alignContent: 'flex-end',
  },
  contentCenter: {
    alignContent: 'center',
  },
  contentStretch: {
    alignContent: 'stretch',
  },
  contentBetween: {
    alignContent: 'space-between',
  },
  contentAround: {
    alignContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  flexNoWrap: {
    flexWrap: 'nowrap',
  },
  overflowVisible: {
    overflow: 'visible',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
});

export default Layout;
