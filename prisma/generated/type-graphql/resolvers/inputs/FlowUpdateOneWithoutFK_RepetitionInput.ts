import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_RepetitionInput } from "../inputs/FlowCreateOrConnectWithoutFK_RepetitionInput";
import { FlowCreateWithoutFK_RepetitionInput } from "../inputs/FlowCreateWithoutFK_RepetitionInput";
import { FlowUpdateWithoutFK_RepetitionInput } from "../inputs/FlowUpdateWithoutFK_RepetitionInput";
import { FlowUpsertWithoutFK_RepetitionInput } from "../inputs/FlowUpsertWithoutFK_RepetitionInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_RepetitionInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFK_RepetitionInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFK_RepetitionInput | undefined;

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

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_RepetitionInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutFK_RepetitionInput | undefined;
}
