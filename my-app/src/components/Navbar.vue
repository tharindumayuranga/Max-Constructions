<template>
    <v-container>
        <v-row>
            <template>
                <v-navigation-drawer
                        v-model="drawer"
                        :clipped="$vuetify.breakpoint.lgAndUp"
                        app
                        :mini-variant.sync="mini"
                        dark
                        color="#1e1e2e"
                >
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-title>John Leider</v-list-item-title>

                        <v-btn
                                icon
                                @click.stop="mini = !mini"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list
                            dense
                            nav
                    >
                        <v-list-item
                                v-for="item in items"
                                :key="item.title"
                                link
                                router :to="item.route"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </template>

            <template>
                <v-app-bar
                        :clipped-left="$vuetify.breakpoint.lgAndUp"
                        app
                        flat
                        dark
                        color="primary"
                >
                    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                    <v-toolbar-title>Max Construction & Engineering</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-bell</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn icon px-3>
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                    <!--v-menu
                            left
                            bottom
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>

                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu-->
                </v-app-bar>
            </template>
        </v-row>
    </v-container>
</template>

<script>

    export default {

        data() {
            return {
                drawer: true,
                items: [
                    {title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
                    {title: 'Machines & Tools', icon: 'mdi-tools', route: '/machine'},
                    {title: 'Labours', icon: 'mdi-worker', route: '/labour'},
                    {title: 'Project', icon: 'mdi-file', route: '/project'},
                    {title: 'About', icon: 'mdi-help-box', route: '/about'},
                ],
                right: null,
                mini: true,
            }
        }
    }
</script>
<style>


</style>