import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestCreateWithoutFK_UserInput } from "../inputs/FeatureRequestCreateWithoutFK_UserInput";
import { FeatureRequestUpdateWithoutFK_UserInput } from "../inputs/FeatureRequestUpdateWithoutFK_UserInput";
import { FeatureRequestWhereUniqueInput } from "../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.InputType("FeatureRequestUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FeatureRequestUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureRequestUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: FeatureRequestUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => FeatureRequestCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FeatureRequestCreateWithoutFK_UserInput;
}
