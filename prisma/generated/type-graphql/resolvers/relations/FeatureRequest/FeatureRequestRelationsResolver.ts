import * as TypeGraphQL from "type-graphql";
import { FeatureRequest } from "../../../models/FeatureRequest";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FeatureRequest)
export class FeatureRequestRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() featureRequest: FeatureRequest, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).featureRequest.findUnique({
      where: {
        FeatureRequestID: featureRequest.FeatureRequestID,
      },
    }).FK_User({});
  }
}
