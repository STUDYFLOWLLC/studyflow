import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FeatureRequestInput } from "../inputs/UserCreateWithoutFK_FeatureRequestInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_FeatureRequestInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_FeatureRequestInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FeatureRequestInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FeatureRequestInput;
}
