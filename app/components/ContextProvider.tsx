'use client';

import { createContext } from 'react';
import FormContextApi from '../utils/FormContextApi';

export const FormContext = createContext<any>(null);

export default function FormContextProvider({ children }: { children: any }) {
	return <FormContext.Provider value={FormContextApi()}>{children}</FormContext.Provider>;
}
