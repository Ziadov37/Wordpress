<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'swvD3c(xd7VaLa]Y!6N]RC!N>N3;=cwn%JkvO!q#Y*9dMKr=w`qt&a`J){o7Y*{`' );
define( 'SECURE_AUTH_KEY',  'sNNEO|Bbo&=z|$s=gqBeZt,%<+f}u7*kSxDp/`oN3^0>BKmgg12Y5hQW!k.T7qo~' );
define( 'LOGGED_IN_KEY',    't2A5Qog,Hh/O1 jkVm0eWbbaH[X_wuRS2grO;r4<_UM]7&2ZsUS1lIR`2 s-,zqQ' );
define( 'NONCE_KEY',        'xP4q^h[E,RQLQNyxHcr?{Z`=_k9NX{g4!OK:6Nxs(C{hfKuqT|*?OJ>q@/xN2;nW' );
define( 'AUTH_SALT',        'RU*w!7~AV~iK}~}{59tO%F;t?Uwq-}7(kL/^p.Jwn(Zi:9T@V9?e4(U4VwIt80De' );
define( 'SECURE_AUTH_SALT', 'U,6|KDB_)-^hQhMD$Lv8s~6u9W|ZeDg>/^rL:^v&|D5Efew45JoQq[A(S31a_?xB' );
define( 'LOGGED_IN_SALT',   'zO5FR+<m,|gCu* dQuAX0fM5<~ >ap[pQEw5,9t!c[R^S92.ALe!L]S~iC~U[HXY' );
define( 'NONCE_SALT',       'i6i|%M{]+}(7D UspxQLc3m`DhRv1RZK%}~jlOCbf#R3W1XQgqOI5#1Y0Mf}y]3f' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
