<template>
    <div class="machine">
        <v-container class="my-3">
        <v-title>Machines & Tools</v-title>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="machine in machines" :key="machine.name">
                    <v-card class="text-center ma-3">
                        <v-responsive class="pt-4">
                            image
                        </v-responsive>
                        <v-card-text>
                            <div class="title">{{ machine.name }}</div>
                            <div class="subtitle-1">{{ machine.status }}</div>
                            <div class="subtitle-2">{{ machine.fuel }}</div>
                            <div class="subtitle-2">{{ machine.price }}</div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-action tile>
                            <v-row>
                                <v-col>
                                        <v-btn x-small fab dark color="cyan" class="ma-2"><v-icon>mdi-pencil</v-icon></v-btn>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col>
                                        <v-btn x-small fab dark color="red" class="ma-2"><v-icon>mdi-delete</v-icon></v-btn>
                                </v-col>
                            </v-row>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>

        <v-container>
            <v-btn
                    color="pink"
                    dark
                    small
                    absolute
                    top
                    right
                    fab
                    class="ma-3"
                    @click="dialog = !dialog"
            >
                <v-icon>mdi-plus</v-icon>

                <v-dialog v-model="dialog" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">New Machine or Tool</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="Name*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="Code*"
                                                      required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select
                                                :items="['Working', 'Repairig', 'Not Working']"
                                                label="Status*"
                                                required
                                        ></v-select>
                                    </v-col> 
                                    <v-col cols="12" sm="6">
                                        <v-select
                                                :items="['Diesel', 'Petrol', 'Electricity', 'None']"
                                                label="Fuel*"
                                                required
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6"> 
                                        <v-currency-field 
                                            label="Price*" 
                                            required
                                            :error-messages="errors.rate"
                                            v-model="rate"/>
                                    </v-col>
        
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-btn>
        </v-container>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                dialog: false,
                rate: 0,
                errors: {},
                machines: [
                    {name: 'Cement Mixer', status: 'Good', fuel: 'Diesel', price: '300000.00'},
                    {name: 'Generator', status: 'Repair', fuel: 'Diesel', price: '70000.00'},
                    {name: 'Drill', status: 'Not Work', fuel: 'Electricity', price: '11000.00'},
                    {name: 'Grinder', status: 'Good', fuel: 'Electricity', price: '8000.00'},
                    {name: 'Chainsaw', status: 'Good', fuel: 'Petrol', price: '50000.00'},
                    {name: 'Hammer', status: 'Good', fuel: 'None', price: '2000.00'},
                    {name: 'Hammer Drill', status: 'Good', fuel: 'Electricity', price: '650000.00'},
                ]
            }
        }
    }
</script>
<style>
</style>