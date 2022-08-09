import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FeatureRequestInput } from "../inputs/UserCreateWithoutFK_FeatureRequestInput";
import { UserUpdateWithoutFK_FeatureRequestInput } from "../inputs/UserUpdateWithoutFK_FeatureRequestInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FeatureRequestInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FeatureRequestInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FeatureRequestInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FeatureRequestInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FeatureRequestInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FeatureRequestInput;
}
