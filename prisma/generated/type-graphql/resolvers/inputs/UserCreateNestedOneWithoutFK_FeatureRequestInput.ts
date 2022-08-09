import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FeatureRequestInput } from "../inputs/UserCreateOrConnectWithoutFK_FeatureRequestInput";
import { UserCreateWithoutFK_FeatureRequestInput } from "../inputs/UserCreateWithoutFK_FeatureRequestInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FeatureRequestInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FeatureRequestInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FeatureRequestInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FeatureRequestInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FeatureRequestInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FeatureRequestInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
