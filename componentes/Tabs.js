import React, { createContext, useContext, useState } from 'react';
import{View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TabsContext = createContext();

export const Tabs = ({ initialValue, children }) => {
  const [activeTab, setActiveTab] = useState(initialValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <View style={styles.tabsContainer}>{children}</View>
    </TabsContext.Provider>
  );
};

export const List = ({ children }) => {
    return <View style={styles.listContainer}>{children}</View>;
};

//botones
export const Option = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  
  return (
    <TouchableOpacity
      style={[styles.optionButton, isActive && styles.optionButtonActive]}
      onPress={() => setActiveTab(value)}
    >
      <Text style={[styles.optionText, isActive && styles.optionTextActive]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};


export const Content = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null; 
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentText}>{children}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden'
  },
  listContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fafafa',
  },
  optionButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  optionButtonActive: {
    borderBottomColor: '#007AFF', 
  },
  optionText: {
    fontSize: 16,
    color: '#666',
  },
  optionTextActive: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
    minHeight: 120,
  },
  contentText: {
    fontSize: 16,
    color: '#333'
  }
});