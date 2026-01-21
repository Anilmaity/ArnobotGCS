import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { fs, hs, ms, vs } from '../../../utilities/responsiveness'
import RightChevron from '../../../assets/svgs/rightChevron'
import DropDownIcon from '../../../assets/svgs/dropDownIcon'
import COLORS from '../../../styles/colors'

interface collapsibleProps {
  que: string
  ans: string
}

const Collapsible = ({ que, ans }: collapsibleProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable style={styles.container} onPress={toggleCollapse}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{que}</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: ms(8),
                backgroundColor: 'transparent',
              }}>
              {!isCollapsed ? <DropDownIcon /> : <RightChevron />}
            </View>
          </View>
        </Pressable>
        {!isCollapsed && (
          <View style={styles.body}>
            <Text>{ans}</Text>
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: COLORS.backgroundWhite,
    paddingVertical: ms(5),
    borderRadius: ms(8),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.backgroundWhite,
    padding: ms(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: ms(8),
  },
  headerText: {
    fontSize: fs(14),
    width: hs(290),
    color: COLORS.textSecondary3,
  },
  body: {
    padding: ms(10),
    color: COLORS.textSecondary3,
    backgroundColor: COLORS.background5 + '70',
    fontSize: fs(14),
    borderRadius: ms(8),
    // marginRight: hs(10),
    width: hs(325),
    marginBottom: vs(10),
  },
})

export default Collapsible
