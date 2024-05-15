import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

import {
  COLORS,
  FONTS,
  FONT_SIZES,
  FontAwesome,
  IMAGES,
  Ionicons,
  h,
  shadow,
} from '../constants';
import LoaderKit from 'react-native-loader-kit';

/**
 * Renders a button component based on the provided props.
 *
 * @param {any} title - The title of the button
 * @param {boolean} regularBtn - Indicates if the regular button should be rendered
 * @param {boolean} primaryBtn - Indicates if the primary button should be rendered
 * @param {boolean} secondryBtn - Indicates if the secondary button should be rendered
 * @param {boolean} loading - Indicates if the button is in a loading state
 * @param {object} style - Custom styles for the button
 * @param {...any} rest - Additional props
 * @return {JSX.Element} The rendered button component
 */
const Button = ({
  title,
  regularBtn,
  primaryBtn,
  secondryBtn,
  loading,
  style,
  socialBtn,
  google,
  ...rest
}: any) => {
  const touchprops = {
    activeOpacity: 0.8,
    ...rest,
  };
  return (
    <View>
      {regularBtn ? (
        <TouchableOpacity
          {...touchprops}
          disabled={loading || rest.disabled}
          style={[{...styles.container, opacity: rest?.disabled ? 0.6 : 1}]}>
          <View style={{flexDirection: 'row'}}>
            {loading ? (
              <LoaderKit
                style={{width: 18, height: 18}}
                name={'BallTrianglePath'}
                color={'white'}
              />
            ) : (
              <Text style={[styles.txtSignIn, {color: COLORS.white}]}>
                {title}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ) : primaryBtn ? (
        <TouchableOpacity {...touchprops} style={styles.btnPrimary}>
          <View style={{flexDirection: 'row'}}>
            {loading ? (
              <LoaderKit
                style={{width: 18, height: 18}}
                name={'BallTrianglePath'}
                color={'white'}
              />
            ) : (
              <Text style={[styles.txtSignIn]}>{title}</Text>
            )}
          </View>
        </TouchableOpacity>
      ) : secondryBtn ? (
        <TouchableOpacity {...touchprops} style={styles.btnSecondry}>
          <View style={{flexDirection: 'row'}}>
            {loading ? (
              <LoaderKit
                style={{width: 18, height: 18}}
                name={'BallTrianglePath'}
                color={'white'}
              />
            ) : (
              <Text style={[styles.txtSignIn]}>{title}</Text>
            )}
          </View>
        </TouchableOpacity>
      ) : socialBtn ? (
        <TouchableOpacity {...touchprops} style={styles.btnSocial}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {loading ? (
              <LoaderKit
                style={{width: 28, height: 28}}
                name={'BallTrianglePath'}
                color={'white'}
              />
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                {google ? (
                  <Image
                    source={IMAGES.googleLogo}
                    style={{width: 28, height: 28}}
                  />
                ) : (
                  <FontAwesome
                    name="facebook"
                    size={28}
                    color={COLORS.black}
                    style={{marginRight: 10}}
                  />
                )}
                <Text style={[styles.txtSignIn]}>{title}</Text>
                <View />
              </View>
            )}
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary1,
    alignItems: 'center',
    borderRadius: 10,
    padding: h('1.7%'),
  },
  btnPrimary: {
    backgroundColor: COLORS.primary2,
    alignItems: 'center',
    borderRadius: 10,
    padding: h('1.7%'),
    ...shadow,
    marginVertical: h('1%'),
  },
  btnSecondry: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 10,
    padding: h('1.7%'),
    ...shadow,
    marginVertical: h('1%'),
  },
  btnSocial: {
    backgroundColor: COLORS.transparent,
    alignItems: 'center',
    borderRadius: 10,
    padding: h('1.2%'),
    justifyContent: 'space-between',
    marginVertical: h('1%'),
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  btnView: {
    // backgroundColor: COLORS.primary1,
    alignItems: 'center',
    borderRadius: 10,
    padding: h('1.2%'),
  },
  txtSignIn: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.small,
    color: COLORS.black,
  },
});
