cat <<EOF > dist/conf.json
{
	"api": "https://api-$TAIGA_DOMAIN/api/v1/",
	"eventsUrl": "wss://events-$TAIGA_DOMAIN/",
	"debug": "$DEBUG",
	"publicRegisterEnabled": $PUBLIC_REGISTER_ENABLED,
	"feedbackEnabled": true,
	"privacyPolicyUrl": null,
	"termsOfServiceUrl": null,
	"GDPRUrl": null,
	"maxUploadFileSize": null,
	"contribPlugins": ["/plugins/slack/slack.json"]
}
EOF

cp clevercloud/.htaccess dist/

cd dist/
mkdir -p plugins
cd plugins
wget https://github.com/taigaio/taiga-contrib-slack/archive/3.1.tar.gz
tar -xvzf 3.1.tar.gz
mv taiga-contrib-slack-3.1/front/dist slack
rm -rf taiga-contrib-slack-3.1
rm -rf 3.1.tar.gz
