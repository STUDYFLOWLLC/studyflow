import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestUpdateWithoutFK_UserInput } from "../inputs/FeatureRequestUpdateWithoutFK_UserInput";
import { FeatureRequestWhereUniqueInput } from "../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.InputType("FeatureRequestUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FeatureRequestUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureRequestUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: FeatureRequestUpdateWithoutFK_UserInput;
}
