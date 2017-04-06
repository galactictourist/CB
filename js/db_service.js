// var DBService = angular.module('DBService', ['$q'])
// .service('dbservice', function ($q) {

// return {
//        getNotes: getNotes,
//        addNote: addNote,
//        deleteNote: deleteNote
//    };

//         function getNotes(){
//             var deferred = $q.defer();

//             Notes.find({},function(err, notes){
//                 if (err) deferred.reject(err);
//                 deferred.resolve(notes);
//             });

//             return deferred.promise;
//         }

//         function addNote(text){
//             var deferred = $q.defer();

//             var note = new Notes();
//             note.text = text;

//             Notes.insert(note, function(err, newNote){
//                 if (err) deferred.reject(err);
//                 deferred.resolve(newNote);
//             });

//             return deferred.promise;
//         }

//         function deleteNote(id){
//             var deferred = $q.defer();

//             Notes.remove({_id: id}, function(err, numRemoved){
//                 if (err) deferred.reject(err);
//                 deferred.resolve(numRemoved);
//             });

//             return deferred.promise;
//         }

// });
