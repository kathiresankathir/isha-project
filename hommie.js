import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function App (props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Image
              resizeMode="contain"
              source={{
               
              }}
              style={styles.image1}
            />
            <View style={styles.view5}>
              <Text>Doctor</Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={{
            }}
            style={styles.image2}
          />
        </View>
        <View style={styles.view6}>
          <Image
            resizeMode="contain"
            source={{
            }}
            style={styles.image3}
          />
          <View style={styles.view7}>
            <Text>Medical Center</Text>
          </View>
        </View>
      </View>
      <View style={styles.view8}>
        <Text>Categories</Text>
      </View>
      <div style={styles.div1}>
        <div style={styles.div2}>
          <div style={styles.div3}>
            <View style={styles.view9}>
              <View style={styles.view10}>
                <Text>Anemia</Text>
              </View>
              <View style={styles.view11}>
                <Text>Patients</Text>
              </View>
            </View>
          </div>
          <div style={styles.div4}>
            <View style={styles.view12}>
              <View style={styles.view13}>
                <View style={styles.view14}>
                  <Text>Hypertension</Text>
                </View>
                <View style={styles.view15}>
                  <Text>General</Text>
                </View>
              </View>
              <View style={styles.view16}>
                <Text>view patients</Text>
              </View>
            </View>
          </div>
        </div>
      </div>
      <View style={styles.view17}>
        <View style={styles.view18}>
          <View style={styles.view19}>
            <Image
              resizeMode="contain"
              source={{
              }}
              style={styles.image4}
            />
          </View>
          <View style={styles.view20}>
            <View style={styles.view21}>
              <Text># Patient 1 </Text>
            </View>
            <View style={styles.view22}>
              <Text>details</Text>
            </View>
          </View>
        </View>
        <View style={styles.view23}>
          <View style={styles.view24}>
            <Image
              resizeMode="contain"
              source={{
              }}
              style={styles.image5}
            />
          </View>
          <View style={styles.view25}>
            <View style={styles.view26}>
              <Text># Patient 2 </Text>
            </View>
            <View style={styles.view27}>
              <Text>details</Text>
            </View>
          </View>
        </View>
        <View style={styles.view28}>
          <View style={styles.view29}>
            <Image
              resizeMode="contain"
              source={{
              }}
              style={styles.image6}
            />
          </View>
          <View style={styles.view30}>
            <View style={styles.view31}>
              <Text># Patient 3 </Text>
            </View>
            <View style={styles.view32}>
              <Text>details</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view33}>
        <Image
          resizeMode="contain"
          source={{
          }}
          style={styles.image7}
        />
        <Image
          resizeMode="contain"
          source={{
          }}
          style={styles.image8}
        />
        <Image
          resizeMode="contain"
          source={{
           
          }}
          style={styles.image9}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    borderRadius: 30,
    backgroundColor: "var(--colors-primary, #FFF)",
    display: "flex",
    paddingTop: 25,
    flexDirection: "column",
    alignItems: "start",
  },
  view2: {
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 10px",
  },
  view3: {
    display: "flex",
    width: "100%",
    maxWidth: 338,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  view4: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  image1: {
    overflow: "hidden",
    borderRadius: "50%",
    position: "relative",
    display: "flex",
    width: 70,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view5: {
    color: "#000",
    textAlign: "center",
    alignSelf: "center",
    flexGrow: "1",
    whiteSpace: "nowrap",
    margin: "auto 0",
    font: "400 22px/22px Inter, sans-serif ",
  },
  image2: {
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    width: 32,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    margin: "auto 0",
    aspectRatio: "1",
  },
  view6: {
    borderRadius: 10,
    backgroundColor: "#00BFA6",
    alignSelf: "stretch",
    display: "flex",
    marginTop: 19,
    paddingRight: 18,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  image3: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 153,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1.03",
  },
  view7: {
    color: "#000",
    textAlign: "center",
    alignSelf: "start",
    marginTop: 21,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "400 26px/26px Inter, sans-serif ",
  },
  view8: {
    color: "#000",
    textAlign: "center",
    alignSelf: "stretch",
    marginTop: 23,
    width: "100%",
    font: "400 24px/24px Inter, sans-serif ",
  },
  div1: { marginTop: 7 },
  div2: { gap: 20, display: "flex" },
  div3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "33%",
  },
  view9: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 20px",
  },
  view10: {
    color: "var(--colors-primary, #FFF)",
    whiteSpace: "nowrap",
    borderRadius: 10,
    backgroundColor: "#00BFA6",
    justifyContent: "center",
    alignItems: "stretch",
    padding: "30px 36px 30px 41px",
    font: "700 20px/20px Inter, sans-serif ",
  },
  view11: {
    color: "#2F2F2F",
    letterSpacing: 0.44,
    marginTop: 33,
    whiteSpace: "nowrap",
    font: "600 22px Inter, sans-serif ",
  },
  div4: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "67%",
    marginLeft: 20,
  },
  view12: {
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view13: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 8,
  },
  view14: {
    color: "var(--colors-primary, #FFF)",
    whiteSpace: "nowrap",
    borderRadius: 10,
    backgroundColor: "#00BFA6",
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "stretch",
    padding: "30px 11px",
    font: "700 20px/20px Inter, sans-serif ",
  },
  view15: {
    color: "var(--colors-primary, #FFF)",
    borderRadius: 10,
    backgroundColor: "#00BFA6",
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "stretch",
    padding: "30px 34px 30px 41px",
    font: "700 20px/20px Inter, sans-serif ",
  },
  view16: {
    color: "var(--colors-primary, #FFF)",
    whiteSpace: "nowrap",
    borderRadius: 10,
    backgroundColor: "#198",
    alignSelf: "start",
    justifyContent: "center",
    alignItems: "stretch",
    margin: "26px 0 0 43px",
    padding: "8px 25px",
    font: "600 16px Inter, sans-serif ",
  },
  view17: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 18px",
  },
  view18: {
    borderRadius: 23.983,
    backgroundColor: "#E0E0E0",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 15,
    padding: "18px 80px 18px 18px",
  },
  view19: {
    borderRadius: "50%",
    display: "flex",
    aspectRatio: "1",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px 16px 19px",
  },
  image4: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 30,
    flexDirection: "column",
    aspectRatio: "1",
  },
  view20: {
    alignSelf: "start",
    display: "flex",
    marginTop: 4,
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view21: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "400 19px Inter, sans-serif ",
  },
  view22: {
    color: "#000",
    alignSelf: "center",
    marginTop: 11,
    whiteSpace: "nowrap",
    font: "400 14px Inter, sans-serif ",
  },
  view23: {
    borderRadius: 23.983,
    backgroundColor: "#E0E0E0",
    display: "flex",
    marginTop: 15,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 15,
    padding: "18px 80px 18px 18px",
  },
  view24: {
    borderRadius: "50%",
    display: "flex",
    aspectRatio: "1",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px 16px 19px",
  },
  image5: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 30,
    flexDirection: "column",
    aspectRatio: "1",
  },
  view25: {
    alignSelf: "start",
    display: "flex",
    marginTop: 4,
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view26: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "400 19px Inter, sans-serif ",
  },
  view27: {
    color: "#000",
    alignSelf: "center",
    marginTop: 12,
    whiteSpace: "nowrap",
    font: "400 14px Inter, sans-serif ",
  },
  view28: {
    borderRadius: 23.983,
    backgroundColor: "#E0E0E0",
    display: "flex",
    marginTop: 15,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 15,
    padding: "18px 80px 18px 18px",
  },
  view29: {
    borderRadius: "50%",
    display: "flex",
    aspectRatio: "1",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px 16px 19px",
  },
  image6: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 30,
    flexDirection: "column",
    aspectRatio: "1",
  },
  view30: {
    alignSelf: "start",
    display: "flex",
    marginTop: 4,
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view31: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "400 19px Inter, sans-serif ",
  },
  view32: {
    color: "#000",
    alignSelf: "center",
    marginTop: 12,
    whiteSpace: "nowrap",
    font: "400 14px Inter, sans-serif ",
  },
  view33: {
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: "0px 0px 30px 30px",
    backgroundColor: "#00BFA6",
    display: "flex",
    gap: 20,
    padding: "13px 80px 13px 36px",
  },
  image7: {
    fill: "#000",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 30,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  image8: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 30,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  image9: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 30,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
});
export default App;

