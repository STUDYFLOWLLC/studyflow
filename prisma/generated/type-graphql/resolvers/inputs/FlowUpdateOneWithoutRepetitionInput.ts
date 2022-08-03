import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutRepetitionInput } from "../inputs/FlowCreateOrConnectWithoutRepetitionInput";
import { FlowCreateWithoutRepetitionInput } from "../inputs/FlowCreateWithoutRepetitionInput";
import { FlowUpdateWithoutRepetitionInput } from "../inputs/FlowUpdateWithoutRepetitionInput";
import { FlowUpsertWithoutRepetitionInput } from "../inputs/FlowUpsertWithoutRepetitionInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutRepetitionInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutRepetitionInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutRepetitionInput, {
    nullable: true
  })
  create?: FlowCreateWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutRepetitionInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutRepetitionInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutRepetitionInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutRepetitionInput | undefined;
}
