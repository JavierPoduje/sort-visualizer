import { Reducer } from 'react';

import actions from './actions';
import {
  AlgorithmType,
  BarType,
  IPayload,
  ISortVisualizerState,
  SetBarByIdxInputType,
  BuildAnimationInputType,
} from './types';

import buildAnimations from '../algorithms/buildAnimations';

const reducer: Reducer<ISortVisualizerState, IPayload> = (state, payload) => {
  switch (payload.type) {
    case actions.BUILD_ANIMATION:
      const { bars: contextBars, algorithm } =
        payload.value as BuildAnimationInputType;
      return { ...state, animation: buildAnimations(contextBars, algorithm) };
    case actions.SET_BARS_HEIGHT:
      return { ...state, barsHeight: payload.value as number[] };
    case actions.CLEAN_ANIMATION:
      return { ...state, animation: [] };
    case actions.SET_BARS:
      return { ...state, bars: payload.value as BarType[] };
    case actions.SET_NAVBAR_BUTTONS_DISABLED:
      return { ...state, navbarButtonsDisabled: payload.value as boolean };
    case actions.SET_RUN_ALGORITHM:
      return { ...state, runAlgorithm: payload.value as boolean };
    case actions.SET_ANIMATION_FINISHED:
      return { ...state, animationFinished: payload.value as boolean };
    case actions.SET_BAR_BY_IDX:
      const bars = state.bars;
      const { bar, idx } = payload.value as SetBarByIdxInputType;
      const newBars = [...bars];
      newBars[idx] = bar;
      return { ...state, bars: newBars };
    case actions.SET_ALGORITHM:
      return { ...state, algorithm: payload.value as AlgorithmType };
    case actions.SET_SPEED:
      const speed = 1 - (payload.value as number) / 100;
      return { ...state, speed };
    default:
      return state;
  }
};

export default reducer;
