<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'litelite' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         's0t}sl2R?yKB(.oClzp%a7~.|W*tM1W jYIyTF s2HAq% NC10esO+%]0W6k!AlB' );
define( 'SECURE_AUTH_KEY',  'HgwhZeua)wi1e!b8ajbG2G#[Mj`OG6*GzWg~+Qz*ws6u&,L7!KnI5T9r~1q_b!S<' );
define( 'LOGGED_IN_KEY',    'RF|zh}{I{qHI#Qz+.<Shcj30rm+x$>&.c!nMlX)i5~ eeZ,Z*OeJ>eyQ1kKuze5Z' );
define( 'NONCE_KEY',        '@_v+.bX4QlWzv=T(LP mZ=)$^?Hu2qdS}T9Tei)33eKyQX7wpOX0?D,0me5ib;3Y' );
define( 'AUTH_SALT',        'c1JjmpMltt}T^e Xu0~<0(KPXX8+y}/yY!ScUZDOqXnB$O1Ew %O8$/q27J2+ CF' );
define( 'SECURE_AUTH_SALT', 'Y!!%SEYoH#i<T>Z,f2FS{T{$Rjqn4Vc|7,A2yIR{Rq+tc=dswW_[3atjc0^;&:ku' );
define( 'LOGGED_IN_SALT',   ']#I</5/&I|?}f,GHn3 kb&QiNy-xbL@rVw%w$CDnaUe<cBiyzFwWa1q#uJ&bF5V?' );
define( 'NONCE_SALT',       '*/n0Rf=NH](W`y-o|}/I%U@.EKVBhn$s&2Xk9O42_]x6So^s?^?MbE&6F)D5dfv(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'lite_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
