/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('submitButton').addEventListener('click', this.onDeviceReady, false);
        document.getElementById('fetchButton').addEventListener('click', this.fetchAction, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        var firstname = document.getElementById('firstname').value,
        lastname = document.getElementById('lastname').value;
        
        if (firstname != "" || lastname != "") {
            cordova.exec(
                         // Register the callback handler
                         null,
                         // Register the errorHandler
                         null,
                         // Define what class to route messages to
                         'CoreDataHandler',
                         // Execute this method on the above class
                         'valuesFromWeb',
                         // An array containing one String (our newly created Date String).
                         [ firstname,lastname ]
                         );
            document.getElementById('firstname').value = '';
            document.getElementById('lastname').value = '';
        }
        else {
            alert('first name or last name is empty');
        }
    },
    
    fetchAction: function() {
        
        cordova.exec(
                     // Register the callback handler
                     null,
                     // Register the errorHandler
                     null,
                     // Define what class to route messages to
                     'CoreDataHandler',
                     // Execute this method on the above class
                     'fetchValuesFromCoredata',
                     // An array containing one String (our newly created Date String).
                     []
                     );


    }
    
    
//    // Update DOM on a Received Event
//    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//
//        console.log('Received Event: ' + id);
//    },
};

app.initialize();


