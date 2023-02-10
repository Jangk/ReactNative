function join(age: number): number
function join(age: string): string
function join(age: string | number): number | string {
  if (typeof age === 'number') {
    return age
  } else return '다시입력해'
}
