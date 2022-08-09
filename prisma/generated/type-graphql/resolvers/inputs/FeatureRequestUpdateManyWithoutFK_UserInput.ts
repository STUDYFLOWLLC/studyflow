import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestCreateManyFK_UserInputEnvelope } from "../inputs/FeatureRequestCreateManyFK_UserInputEnvelope";
import { FeatureRequestCreateOrConnectWithoutFK_UserInput } from "../inputs/FeatureRequestCreateOrConnectWithoutFK_UserInput";
import { FeatureRequestCreateWithoutFK_UserInput } from "../inputs/FeatureRequestCreateWithoutFK_UserInput";
import { FeatureRequestScalarWhereInput } from "../inputs/FeatureRequestScalarWhereInput";
import { FeatureRequestUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/FeatureRequestUpdateManyWithWhereWithoutFK_UserInput";
import { FeatureRequestUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/FeatureRequestUpdateWithWhereUniqueWithoutFK_UserInput";
import { FeatureRequestUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/FeatureRequestUpsertWithWhereUniqueWithoutFK_UserInput";
import { FeatureRequestWhereUniqueInput } from "../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.InputType("FeatureRequestUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FeatureRequestUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FeatureRequestCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FeatureRequestCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FeatureRequestCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: FeatureRequestUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureRequestCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestWhereUniqueInput], {
    nullable: true
  })
  set?: FeatureRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FeatureRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestWhereUniqueInput], {
    nullable: true
  })
  delete?: FeatureRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: FeatureRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: FeatureRequestUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: FeatureRequestUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FeatureRequestScalarWhereInput[] | undefined;
}
