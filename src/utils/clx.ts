/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */

type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];

export function clx(...args: ClassValue[]):string {
	let i=0, temp, string='';
  const len = args.length;

  do {
    if (temp = args[i]) {
			if (typeof temp === 'string') {
				string += (string && ' ') + temp;
			}
		}
    i++;
  } while (i < len);

	return string;
}

export default clx;