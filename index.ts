import "expo-asset";

import { registerRootComponent } from "expo";
import { App } from "./core/App";
import "./core/navigation/notificationService";
// Config

registerRootComponent(App);
