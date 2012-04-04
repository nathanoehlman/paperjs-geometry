/*!
 * Paper.js v*#=* options.version
 *
 * This file is part of Paper.js, a JavaScript Vector Graphics Library,
 * based on Scriptographer.org and designed to be largely API compatible.
 * http://paperjs.org/
 * http://scriptographer.org/
 *
 * Copyright (c) 2011, Juerg Lehni & Jonathan Puckey
 * http://lehni.org/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: *#=* options.date
 *
 ***
 *
 * Bootstrap.js JavaScript Framework.
 * http://bootstrapjs.org/
 *
 * Copyright (c) 2006 - 2011 Juerg Lehni
 * http://lehni.org/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Parse-js
 *
 * A JavaScript tokenizer / parser / generator, originally written in Lisp.
 * Copyright (c) Marijn Haverbeke <marijnh@gmail.com>
 * http://marijn.haverbeke.nl/parse-js/
 *
 * Ported by to JavaScript by Mihai Bazon
 * Copyright (c) 2010, Mihai Bazon <mihai.bazon@gmail.com>
 * http://mihai.bazon.net/blog/
 *
 * Modifications and adaptions to browser (c) 2011, Juerg Lehni
 * http://lehni.org/
 *
 * Distributed under the BSD license.
 */

var paper = new function() {
// Inline Bootstrap core (the Base class) inside the paper scope first:
/*#*/ include('../lib/bootstrap.js');

/*#*/ include('core/Base.js');

// Include Paper classes, which are later injected into PaperScope by setting
// them on the 'this' object, e.g.:
// var Point = this.Point = Base.extend(...);

/*#*/ include('basic/Point.js');
/*#*/ include('basic/Size.js');
/*#*/ include('basic/Rectangle.js');
/*#*/ include('basic/Matrix.js');
/*#*/ include('basic/Line.js');

/*#*/ if (options.browser) {
/*#*/ include('core/initialize.js');
/*#*/ } // options.browser

/*#*/ if (options.version != 'dev') {
// Finally inject the classes set on 'this' into the PaperScope class and create
// the first PaperScope and return it, all in one statement.
// The version for 'dev' of this happens in core/initialize.js, since it depends
// on sequentiality of include() loading.
// Mark this object as enumerable, so all the injected classes can be enumerated
// again in PaperScope#install().
this.enumerable = true;
return new (PaperScope.inject(this));
/*#*/ } // options.version != 'dev'
};
