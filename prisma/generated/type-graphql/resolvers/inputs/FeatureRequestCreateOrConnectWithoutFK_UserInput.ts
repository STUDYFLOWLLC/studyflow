import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestCreateWithoutFK_UserInput } from "../inputs/FeatureRequestCreateWithoutFK_UserInput";
import { FeatureRequestWhereUniqueInput } from "../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.InputType("FeatureRequestCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class FeatureRequestCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureRequestCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FeatureRequestCreateWithoutFK_UserInput;
}
