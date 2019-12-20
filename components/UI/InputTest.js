import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import useForm from "react-hook-form";

const InputTest = props => {
  //// react hook form declaration////
  const { register, setValue, handleSubmit, errors } = useForm();
  const req = props.required ? true : false;
  //const errordata = `errors.${props.txtname}`;
  //console.log(props.required, props.txtname);
  //console.log(errors);
  //console.log(req);
  return (
    <View style={styles.inputForm}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          // {...props}
          style={styles.inputStyle}
          id="txtPass"
          //value={inputState.value}
          //onChangeText={txtChangeHandler}
          //onBlur={lostFocusHandler}
          ref={register({ name: props.txtname }, { required: req })}
          onChangeText={text => setValue(props.txtname, text, req)}
        />
        <View style={styles.iconStyling}>
          {props.isVisible && (
            <Icon
              name="ios-eye"
              type="ionicon"
              color="#000"
              size={30}
              onPress={props.onPress}
            />
          )}
        </View>
      </View>
      <View style={styles.errorContainer}>
        {/* {errors.name == true ? (
          <Text>This is required.</Text>
        ) : (
          <Text>This is not required.</Text>
        )} */}
        {/* <Text style={styles.errorText}>{props.errorText}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%"
  },
  passwordContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000",
    paddingBottom: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  inputStyle: {
    flex: 1,
    fontSize: 20
  },
  iconStyling: {
    marginRight: 10,
    marginTop: 5
  },
  labelStyle: {
    fontSize: 18
  },
  inputForm: {
    marginTop: 10,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center"
  },

  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    color: "red",
    fontSize: 13
  }
});

export default InputTest;
