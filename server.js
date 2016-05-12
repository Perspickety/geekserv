/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(path.join(__dirname, 'client')));

app.set('port', (process.env.PORT || 3000));

app.set('views', __dirname + '/client/templates');
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.get(('/'), function(req, res) {
    res.render('index.ejs', {contents:'landing.html'})
});

app.get('/aboutus', function(req, res) {
    res.render('index.ejs', {contents:'aboutus.html'})
});

app.get('/testimonials', function(req, res) {
    res.render('index.ejs', {contents:'testimonials.html'})
});

app.get('/faq', function(req, res) {
    res.render('index.ejs', {contents:'faq.html'})
});

app.all('*', function(req, res) {
    res.redirect('/')
})

// app.post('/api/comments', function(req, res) {
//     fs.readFile(COMMENTS_FILE, function(err, data) {
//         if (err) {
//             console.error(err);
//             process.exit(1);
//         }
//         var comments = JSON.parse(data);
//         // NOTE: In a real implementation, we would likely rely on a database or
//         // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
//         // treat Date.now() as unique-enough for our purposes.
//         var newComment = {
//             id: Date.now(),
//             author: req.body.author,
//             text: req.body.text,
//         };
//         comments.push(newComment);
//         fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
//             if (err) {
//                 console.error(err);
//                 process.exit(1);
//             }
//             res.json(comments);
//         });
//     });
// });


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
