<template>
    <div class="machine">
        <v-title>Machines & Tools</v-title>
        <v-container class="my-3">
              
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="machine in newMachines" :key="machine.name">
                    <v-card class="text-center ma-3 pa-2 text-primary">
                        <v-responsive>
                            <v-img
                                height="185px"
                                contain
                                :src="`/img/${machine.img}`"
                            >
                            </v-img>
                        </v-responsive>
                        <div>
                            <v-card-title>{{ machine.name }} <v-spacer></v-spacer> {{ machine.code }}</v-card-title>
                        </div>

                        <div :class="`subtitle-2 machine ${machine.status} `" >{{ machine.status }}</div>
                        <div class="subtitle-2"><b>Rental: </b>{{ machine.rental }}</div>
                        <div class="subtitle-2"><b>Fuel: </b>{{ machine.fuel }}</div>
                        <div class="subtitle-2"><b>Location: </b>{{ machine.location }}</div>
                       
                        <v-btn
                            icon
                            @click="machine.show = !machine.show"
                        >
                            <v-icon>{{ machine.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>

                            <v-expand-transition>
                            <div v-show="machine.show">   
                                <div class="subtitle-2" left><b>Price: </b>{{ machine.price }}</div>
                                <div class="subtitle-2" left><b>Purchase Date: </b>{{ machine.date }}</div>
                            </div>
                        </v-expand-transition>

                        <v-divider></v-divider>

                        <v-card-action>
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
                                            v-model="price"/>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                         <v-file-input
                                                :rules="rules"
                                                accept="image/png, image/jpeg, image/jpg"
                                                placeholder="Pick an image"
                                                prepend-icon="mdi-camera"
                                                label="Image"
                                            ></v-file-input>
                                    </v-col>
                                    <v-col cols="12" sm="6"> 
                                        <v-currency-field 
                                            label="Rental*" 
                                            required
                                            :error-messages="errors.rate"
                                            v-model="rental"/>
                                    </v-col> 
                                    <v-col cols="12" sm="6">
                                        <v-select
                                                :items="['Nelundeniya', 'Ambepussa']"
                                                label="Location*"
                                                required
                                        ></v-select>
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
                price: 0,
                rental: 0,
                errors: {},
                newMachines: [],
                machines: [
                    {name: 'Cement Mixer', code:'1234', status: 'Working', fuel: 'Diesel', price: '300000.00', img: 'cement-mixer.jpg', location: 'Nelundeniya', rental: '5000.00', date: '2018/01/01'},
                    {name: 'Generator', code:'1234', status: 'Repairing', fuel: 'Diesel', price: '70000.00',  img: 'Generator.jpg', location: 'Ambepussa', rental: '2000.00', date: '2018/01/01'},
                    {name: 'Drill', code:'1234', status: 'Not Working', fuel: 'Electricity', price: '11000.00', img: 'Drill.jpg', location: 'Nelundeniya', rental: '1000.00', date: '2018/01/01'},
                    {name: 'Grinder', code:'1234', status: 'Working', fuel: 'Electricity', price: '8000.00', img: 'Grinder.jpg', location: 'Ambepussa', rental: '1000.00', date: '2018/01/01'},
                    {name: 'Chainsaw', code:'1234', status: 'Repairing', fuel: 'Petrol', price: '50000.00', img: 'Chainsaw.png', location: 'Ambepussa', rental: '1500.00', date: '2018/01/01'},
                    {name: 'Hammer', code:'1234', status: 'Working', fuel: 'None', price: '2000.00', img: 'Hammer.jpg', location: 'Nelundeniya', rental: '100.00', date: '2018/01/01'},
                    {name: 'Hammer Drill', code:'1234', status: 'Working', fuel: 'Electricity', price: '650000.00', img: 'HammerDrill.jpg', location: 'Nelundeniya', rental: '1500.00', date: '2018/01/01'},
                ],
                rules: [
                     value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
                ],
            }
        },

    // individual expansion on Vuetify card 
        mounted(){
            this.addShow()
        },
         methods: {
            addShow() {
                this.newMachines = this.machines.map(machines => ({
                    ...machines,
                    show: false
                })) 
            }
        },
    // individual expansion on Vuetify card ^
    }
</script>
<style>
.machine.Working{
    color: #4CAF50;
}
.machine.Not.Working{
    color: #FF5252;
}
.machine.Repairing{
    color:#FFC107;
}
</style>