# ReactNative-Movies_II-Gradient

Esta sección está dedicada a trabajar con **gradientes** para hacer el efecto visual de cambio cuando una nueva película es seleccionada.

**Puntualmente aprenderemos:**
- ContextAPI
- Global State
- Extraer colores de las imágenes
- Funciones helper
- Y más
  
Es una sección que puede ser algo retadora, no se estresen mucho y espero que la logren de la mejor

### Importante
No pude correr en  **iOS** por alguna razon que desconozco, esto despues de agregar lo de los colores. Estuve probando en **Android**
**Log:**
```
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
2023-10-12 13:06:36.294 xcodebuild[38100:531600] [MT] DVTAssertions: Warning in /System/Volumes/Data/SWE/Apps/DT/BuildRoots/BuildRoot11/ActiveBuildRoot/Library/Caches/com.apple.xbs/Sources/IDEFrameworks/IDEFrameworks-22267/IDEFoundation/Provisioning/Capabilities Infrastructure/IDECapabilityQuerySelection.swift:103
Details:  createItemModels creation requirements should not create capability item model for a capability item model that already exists.
Function: createItemModels(for:itemModelSource:)
Thread:   <_NSMainThread: 0x600000aa43c0>{number = 1, name = main}
Please file a bug at https://feedbackassistant.apple.com with this warning message and any useful information you can provide.
** BUILD FAILED **
```

## Android
![Screenshot_1697494533](https://github.com/manuels-bts/ReactNative-Movies_II-Gradient/assets/116088500/e132f0c5-4604-4e3e-99a3-94c82099ba90)

![Screenshot_1697138400](https://github.com/manuels-bts/ReactNative-Movies/assets/116088500/3a847b23-e466-4d19-8138-dcd5439bf5a8)

![Screenshot_1697138404](https://github.com/manuels-bts/ReactNative-Movies/assets/116088500/f1d1651c-9d63-4080-a529-a0e28be8a036)

![Screenshot_1697828147](https://github.com/manuels-bts/ReactNative-Movies_II-Gradient/assets/116088500/5387c30b-21fc-4f84-a527-398231828922)


Por alguna razon que desconozco hay un archivo que no se pudo encontrar, Este archivo es sobre colores de los cuales se renderea el Gradiante
```
 ERROR  Error: Cannot find native module 'ImageColors', js engine: hermes
```



