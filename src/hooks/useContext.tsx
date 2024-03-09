import React, {createContext as _createContext, useContext as _useContext} from "react";

export function useContext<T>(context: React.Context<T>) {
    const value = _useContext(context);

    if (value === null) {
        throw Error('Auth context was getting value null');
    }
    return value;
}

export function createContext<T>(value: T | null) {
    return _createContext<T | null>(value);
}
