import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Text, Card, Button, List } from 'react-native-paper';
import FilterContext from '../context/FilterContext';

const Filter = (props) => {
    const { onClearFilter, closeFilters, onSearch } = props;

    const { form, setForm } = useContext(FilterContext);

    return (
        <List.AccordionGroup >
            <TouchableOpacity onPress={onClearFilter}>
                <Text variant="bodyLarge" style={styles.leftText}>Clear Filters</Text>
            </TouchableOpacity>
            <List.Accordion title="Detail Creation" id="4" style={{ flexGrow: 1 }}>
                <List.Item title="Yeast"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, yeast: null })
                            } else { setForm({ ...form, yeast: e }) }
                        }}
                        style={styles.input}
                        value={form.yeast}
                    />} />
                <List.Item title="Brewed before"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, brewed_before: null })
                            } else { setForm({ ...form, brewed_before: e }) }
                        }}
                        style={styles.input}
                        maxLength={7}
                        value={form.brewed_before}
                        keyboardType='numeric' />}
                    description={"the date format is mm-yyyy e.g 10-2011"}
                    descriptionStyle={styles.descriptionStyle}
                />
                <List.Item title="Brewed after"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, brewed_after: null })
                            } else {
                                setForm({ ...form, brewed_after: e })
                            }
                        }}
                        style={styles.input}
                        maxLength={7}
                        value={form.brewed_after}
                        keyboardType='numeric' />}
                    description={"the date format is mm-yyyy e.g 10-2011"}
                    descriptionStyle={styles.descriptionStyle}
                />
                <List.Item title="Hops"
                    onChangeText={(e) => {
                        if (!e) {
                            setForm({ ...form, hops: null })
                        } else { setForm({ ...form, hops: e }) }
                    }}
                    right={() => <TextInput
                        style={styles.input}
                        value={form.hops}
                    />} />
                <List.Item title="Malt"
                    onChangeText={(e) => {
                        if (!e) {
                            setForm({ ...form, malt: null })
                        } else {
                            setForm({ ...form, malt: e })
                        }
                    }}
                    right={() => <TextInput
                        style={styles.input}
                        value={form.malt}
                    />} />
                <List.Item title="Food"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) { setForm({ ...form, food: null }) }
                            else { setForm({ ...form, food: e }) }
                        }}
                        style={styles.input}
                        value={form.food}
                    />} />
                <List.Item title="Ids"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) { setForm({ ...form, ids: null }) }
                            else { setForm({ ...form, ids: e }) }
                        }}
                        style={styles.input}
                        value={form.ids}
                    />} />
            </List.Accordion>
            <List.Accordion title="ABV" id="1">
                <List.Item title="More than"
                    right={() => <TextInput
                        onChangeText={(e) => { if (!e) { setForm({ ...form, abv_gt: null }) } else { setForm({ ...form, abv_gt: e }) } }}
                        style={styles.smallInput}
                        placeholder="0"
                        value={form.abv_gt}
                        keyboardType='numeric'
                    />} />
                <List.Item title="Less than"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, abv_lt: null })
                            } else {
                                setForm({ ...form, abv_lt: e })
                            }
                        }}
                        style={styles.smallInput}
                        placeholder="0"
                        value={form.abv_lt}
                        keyboardType='numeric'
                    />} />
            </List.Accordion>
            <List.Accordion title="IBU" id="2">
                <List.Item title="More than"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, ibu_gt: null })
                            } else {
                                setForm({ ...form, ibu_gt: e })
                            }
                        }}
                        style={styles.smallInput}
                        placeholder="0"
                        value={form.ibu_gt}
                        keyboardType='numeric'
                    />} />
                <List.Item title="Less than"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, ibu_lt: null })
                            } else {
                                setForm({ ...form, ibu_lt: e })
                            }
                        }}
                        style={styles.smallInput}
                        placeholder="0"
                        value={form.ibu_lt}
                        keyboardType='numeric'
                    />} />
            </List.Accordion>
            <List.Accordion title="EBC" id="3">
                <List.Item title="More than"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, ebc_gt: null })
                            } else {
                                setForm({ ...form, ebc_gt: e })
                            }
                        }}
                        style={styles.smallInput}
                        placeholder="0"
                        value={form.ebc_gt}
                        keyboardType='numeric'
                    />} />
                <List.Item title="Less than"
                    right={() => <TextInput
                        onChangeText={(e) => {
                            if (!e) {
                                setForm({ ...form, ebc_lt: null })
                            } else {
                                setForm({ ...form, ebc_lt: e })
                            }
                        }}
                        style={styles.smallInput}
                        placeholder="0"
                        value={form.ebc_lt}
                        keyboardType='numeric'
                    />} />
            </List.Accordion>
            <Card>
                <Card.Actions>
                    <Button labelStyle={styles.cancelText} onPress={closeFilters}>Cancel</Button>
                    <Button style={styles.searchButton} onPress={onSearch}>Search</Button>
                </Card.Actions>
            </Card>
        </List.AccordionGroup>
    )
}

export default Filter

const styles = StyleSheet.create({
    input: {
        borderRadius: 7,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#e3d5ca',
        fontSize: 14,
        color: '#000',
        backgroundColor: '#fff',
        paddingTop: 10,
        width: 150,
        maxHeight: 45
    },
    smallInput: {
        borderRadius: 7,
        borderWidth: 1,
        padding: 10,
        borderColor: '#d6ccc2',
        fontSize: 14,
        color: '#000',
        backgroundColor: '#fff',
        paddingTop: 10,
        width: 70
    },
    cancelText: {
        color: "#780000"
    },
    searchButton: {
        backgroundColor: "#780000"
    },
    descriptionStyle: {
        color: '#b6ad90'
    },
    leftText: {
        textAlign: "right",
        margin: 20,
        color: "#6a4c93",
        textDecorationLine: "underline"
    }
})