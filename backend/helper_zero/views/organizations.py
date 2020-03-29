from rest_framework import status, viewsets
from backend.helper_zero.serializers import OrganizationSerializer
from backend.helper_zero.models import Organization
from rest_framework.response import Response

class OrganizationView(viewsets.ViewSet):

	def list(self, request):
		queryset = Organization.objects.all()
		serializer = OrganizationSerializer (queryset, many=True)
		return Response(serializer.data)

	def create(self, request):
		request_dict = request.data
		serializer = OrganizationSerializer(data=request_dict)
		if serializer.is_valid():
			org = Organization(
				name=request_dict["name"],
				url=request_dict["url"],
				address=request_dict["address"],
				description=request_dict["description"],
				phone=request_dict["phone"],
				org_type=request_dict["org_type"],
				email=request_dict["email"],
				is_dropoff=request_dict["is_dropoff"],
				is_pickup=request_dict["is_pickup"],
				is_mail=request_dict["is_mail"],
				instructions=request_dict["instructions"],
				zipcode=request_dict["zipcode"],
				lat=request_dict["lat"],
				lon=request_dict["lon"],
				auth_user_id=request_dict["auth_user_id"],
				pickup_times=request_dict["pickup_times"],
				dropoff_times=request_dict["dropoff_times"],
			)
			org.save()
			return Response(serializer.data)
		else:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)