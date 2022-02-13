<script>
    import ModalExtra from "./ModalExtra.svelte";

    import PopoverExtra from "./PopoverExtra.svelte";

    import {
        IonicShowActionSheet,
        IonicShowAlert,
        IonicShowPicker,
        IonicShowLoading,
        IonicShowModal,
        IonicShowPopover,
        IonicShowToast,
    } from "./IonicControllers";

    const showModal = () => {
        IonicShowModal("modal-extra", ModalExtra, {
            firstName: "Douglas",

            lastName: "Adams",

            middleInitial: "N",
        }).then(console.log);
    };

    const showPopover = (event) => {
        IonicShowPopover(event, "popover-extra", PopoverExtra, {
            firstName: "Douglas",

            lastName: "Adams",

            middleInitial: "N",
        }).then(console.log);
    };

    const showInputAlert = () => {
        IonicShowAlert({
            header: "Prompt!",
            inputs: [
                {
                    placeholder: "Placeholder 1",
                },
                {
                    name: "name2",
                    id: "name2-id",
                    value: "hello",
                    placeholder: "Placeholder 2",
                },
                {
                    name: "name3",

                    value: "http://ionicframework.com",

                    type: "url",

                    placeholder: "Favorite site ever",
                },
                // input date with min & max
                {
                    name: "name4",
                    type: "date",
                    min: "2017-03-01",
                    max: "2018-01-12",
                },
                // input date without min nor max
                {
                    name: "name5",
                    type: "date",
                },
                {
                    name: "name6",

                    type: "number",

                    min: -5,

                    max: 10,
                },

                {
                    name: "name7",

                    type: "number",
                },
            ],

            buttons: [
                {
                    text: "Cancel",

                    role: "cancel",

                    cssClass: "secondary",

                    handler: () => {
                        console.log("Confirm Cancel");
                    },
                },

                {
                    text: "Ok",

                    handler: (data) => {
                        console.log("Confirm Ok", data);
                    },
                },
            ],
        });
    };

    const showLoading = () => {
        const loading1 = IonicShowLoading({
            message: "Please wait......",

            duration: 30000,
        });

        // to demonstrate early dismissal of loading controller

        loading1.then((loading2) => {
            setTimeout(() => {
                loading2.dismiss();
            }, 2000);
        });
    };

    const showToast = () => {
        IonicShowToast({
            color: "dark",

            duration: 2000,

            message: "Paired successfully",
        });
    };

    const showPicker = () => {
        const pickerOptions = [
            {
                name: "col-0",

                options: [
                    { text: "Dog", value: 0 },

                    { text: "Cat", value: 1 },

                    { text: "Bird", value: 2 },

                    { text: "Lizard", value: 3 },

                    { text: "Chinchilla", value: 4 },
                ],
            },
        ];

        IonicShowPicker({
            columns: pickerOptions,

            buttons: [
                {
                    text: "Cancel",

                    role: "cancel",
                },

                {
                    text: "Confirm",

                    handler: (value) => {
                        console.log(`Got Value `, value);
                    },
                },
            ],
        });
    };

    const showSimpleAlert = () => {
        IonicShowAlert({
            header: "Prompt!",

            subHeader: "Subtitle",

            message: "This is an alert message.",

            buttons: ["OK"],
        });
    };

    const showRadioAlert = () => {
        IonicShowAlert({
            header: "Radio",

            subHeader: "Subtitle",

            message: "This is an alert message.",

            inputs: [
                {
                    type: "radio",

                    label: "Radio 1",

                    value: "value1",

                    checked: true,
                },

                {
                    type: "radio",

                    label: "Radio 2",

                    value: "value2",
                },

                {
                    type: "radio",

                    label: "Radio 3",

                    value: "value3",
                },

                {
                    type: "radio",

                    label: "Radio 4",

                    value: "value4",
                },

                {
                    type: "radio",

                    label: "Radio 5",

                    value: "value5",
                },

                {
                    type: "radio",

                    label: "Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ",

                    value: "value6",
                },
            ],

            buttons: [
                {
                    text: "Cancel",

                    role: "cancel",

                    cssClass: "secondary",

                    handler: () => {
                        console.log("Confirm Cancel");
                    },
                },

                {
                    text: "Ok",

                    handler: (data) => {
                        console.log("Confirm Ok", data);
                    },
                },
            ],
        });
    };

    const showCheckboxAlert = () => {
        IonicShowAlert({
            header: "Radio",

            subHeader: "Subtitle",

            message: "This is an alert message.",

            inputs: [
                {
                    type: "checkbox",

                    label: "Checkbox 1",

                    value: "value1",

                    checked: true,
                },

                {
                    type: "checkbox",

                    label: "Checkbox 2",

                    value: "value2",
                },

                {
                    type: "checkbox",

                    label: "Checkbox 3",

                    value: "value3",
                },

                {
                    type: "checkbox",

                    label: "Checkbox 4",

                    value: "value4",
                },

                {
                    type: "checkbox",

                    label: "Checkbox 5",

                    value: "value5",
                },

                {
                    type: "checkbox",

                    label: "Checkbox 6",

                    value: "value6",
                },
            ],

            buttons: [
                {
                    text: "Cancel",

                    role: "cancel",

                    cssClass: "secondary",

                    handler: () => {
                        console.log("Confirm Cancel");
                    },
                },

                {
                    text: "Ok",

                    handler: (data) => {
                        console.log("Confirm Ok", data);
                    },
                },
            ],
        });
    };

    const showActionSheet = () => {
        IonicShowActionSheet({
            header: "Albums",

            buttons: [
                {
                    text: "Delete",

                    role: "destructive",

                    handler: () => {
                        console.log("Delete clicked");
                    },
                },

                {
                    text: "Share",

                    handler: () => {
                        console.log("Share clicked");
                    },
                },

                {
                    text: "Play",

                    handler: () => {
                        console.log("Play clicked");
                    },
                },

                {
                    text: "Favorite",

                    handler: () => {
                        console.log("Favorite clicked");
                    },
                },

                {
                    text: "Cancel",

                    role: "cancel",

                    handler: () => {
                        console.log("Cancel clicked");
                    },
                },
            ],
        });
    };
</script>

<svelte:head>
    <title>Ionic Companion - Controllers</title>
</svelte:head>

<ion-header translucent="true">
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button />
        </ion-buttons>

        <ion-title>Controllers</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
    <ion-button expand="block" on:click={showActionSheet}>
        Action Sheet
    </ion-button>

    <ion-button expand="block" on:click={showSimpleAlert}>
        Show Simple Alert
    </ion-button>

    <ion-button expand="block" on:click={showRadioAlert}>
        Show Radio Alert
    </ion-button>

    <ion-button expand="block" on:click={showCheckboxAlert}>
        Show Checkbox Alert
    </ion-button>

    <ion-button expand="block" on:click={showInputAlert}>
        Show Input Alert
    </ion-button>

    <ion-button expand="block" on:click={showModal}>Show Modal</ion-button>

    <ion-button expand="block" on:click={showPopover}>Show Popover</ion-button>

    <ion-button expand="block" on:click={showLoading}>Show Loading</ion-button>

    <ion-button expand="block" on:click={showPicker}>Show Picker</ion-button>

    <ion-button expand="block" on:click={showToast}>Show Toast</ion-button>
</ion-content>
