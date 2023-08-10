import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import * as Yup from 'yup';
import {Formik} from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password must bhi Four characters long')
    .max(16, 'Password must bhi eight characters long')
    .required('Length is required'),
  // password: Yup.string().required('Password is required'),
  // confirmPassword: Yup.string()
});
const PasswordGenerate = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    //
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCase;
    }
    if (lowerCase) {
      characterList += lowerCase;
    }
    if (specialChars) {
      characterList += specialChars;
    }
    if (symbols) {
      characterList += symbols;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true); //
  };

  const createPassword = (charaters: string, passwordLength: number) => {
    //
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * charaters.length);
      result += charaters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    //
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generate</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values, 'the values are ');
              generatePasswordString(+values.passwordLength); //todo
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              //  isSubmitting,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}></Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}></View>
                <View style={styles.inputWrapper}></View>
                <View style={styles.inputWrapper}></View>
                <View style={styles.inputWrapper}></View>

                <View style={styles.formAction}>
                  <TouchableOpacity>
                    <Text>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
    // <View>
    //   <Text>PasswordGenerate</Text>
    // </View>
  );
};

export default PasswordGenerate;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 25,
    color: 'red',
  },
  heading: {
    fontSize: 15,
    color: 'white',
  },

  inputWrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  inputColumn: {
    height: 50,
    backgroundColor: 'green',
  },
  inputStyle: {
    height: 50,
    backgroundColor: 'blue',
  },
  formAction: {
    backgroundColor: 'red',
    marginTop:20
  },
});
