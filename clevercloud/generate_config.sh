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
	"contribPlugins": []
}
EOF
