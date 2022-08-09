import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestCreateManyFK_UserInputEnvelope } from "../inputs/FeatureRequestCreateManyFK_UserInputEnvelope";
import { FeatureRequestCreateOrConnectWithoutFK_UserInput } from "../inputs/FeatureRequestCreateOrConnectWithoutFK_UserInput";
import { FeatureRequestCreateWithoutFK_UserInput } from "../inputs/FeatureRequestCreateWithoutFK_UserInput";
import { FeatureRequestWhereUniqueInput } from "../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.InputType("FeatureRequestCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FeatureRequestCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FeatureRequestCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FeatureRequestCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FeatureRequestCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureRequestCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: FeatureRequestWhereUniqueInput[] | undefined;
}
