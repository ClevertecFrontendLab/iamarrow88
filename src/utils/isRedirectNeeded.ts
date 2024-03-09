import {ErrorsRedirectingConditions} from '../constants/common/errors-redirecting-conditions.ts';
export default function isRedirectNeeded(location: string, prevLocation: string) {
    const isRuleExist = !!ErrorsRedirectingConditions[location];
    const isPrevLocationPermitted = ErrorsRedirectingConditions[location].prevLocation === prevLocation;

    return !isRuleExist || !isPrevLocationPermitted;
}
