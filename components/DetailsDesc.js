import React, { useState } from 'react';
import {View, Text} from 'react-native';

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, FONTS, SIZES } from '../constants';

const DetailsDesc = ({data}) => {

    const [text, setText] = useState(data.description.slice(0, 100));
    const [showMore, setShowMore] = useState(false);
    return (
        <>
           <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
           }}>
                <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} /> 
                <EthPrice price={data.price} />
           </View>

            <View style={{marginVertical: SIZES.extraLarge * 1.5,}}>
                <Text style={{
                   fontSize: SIZES.font,
                   fontfamily: FONTS.semiBold,
                   color: COLORS.primary
                }}>
                    Description
                </Text>
                <View style={{marginTop: SIZES.base}}>
                <Text style={{
                   fontSize: SIZES.small,
                   fontfamily: FONTS.regular,
                   color: COLORS.secondary,
                   lineHeight: SIZES.large
                }}>
                    {text}

                    {!showMore && ' ... '}

                    <Text style={{
                        fontSize: SIZES.small,
                        fontfamily: FONTS.semiBold,
                        color: COLORS.primary,
                    }}
                    onPress={() => {
                        if(!showMore) { 
                            setText(data.description)
                            setShowMore(true)
                        }
                        else {
                            setText(data.description.slice(0, 100))
                            setShowMore(false)
                        }
                    }}
                    >
                        {showMore ? ' Show less' : 'Read More'}
                    </Text>
                </Text>
                </View>
            </View>
        </>
    );
}


export default DetailsDesc;
