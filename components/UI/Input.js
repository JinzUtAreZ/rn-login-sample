import React, { useEffect, useReducer } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatchInputState] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initialValid,
    touched: false
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      //console.log("input", id, inputState.value, inputState.isValid);

      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [id, inputState, onInputChange]);

  const txtChangeHandler = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    //console.log("input-isValid", props.required, text);
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatchInputState({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatchInputState({ type: INPUT_BLUR });
  };

  return (
    <View style={styles.inputForm}>
      <Text style={styles.labelStyle}>{props.label}</Text>

      <View style={styles.passwordContainer}>
        <TextInput
          {...props}
          style={styles.inputStyle}
          id="txtPass"
          value={inputState.value}
          onChangeText={txtChangeHandler}
          onBlur={lostFocusHandler}
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
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
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
export default Input;
