import React from 'react'
import { Text } from 'react-native'
import type { FC } from 'react' // import { FunctionComponent } from 'react'와 동일. FunctionComponent의 재정의가 FC기 때문
import * as M from '.'

export type myData = {
  myMod: M.myModule
}

const myModule: FC<myData> = (value) => {
  const { myMod } = value;
  return <Text>{JSON.stringify(myMod, null, 2)}</Text>
}


export default myModule;