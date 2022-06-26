import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardCreateManyFK_FlashCardStackInputEnvelope } from "../inputs/FlashCardCreateManyFK_FlashCardStackInputEnvelope";
import { FlashCardCreateOrConnectWithoutFK_FlashCardStackInput } from "../inputs/FlashCardCreateOrConnectWithoutFK_FlashCardStackInput";
import { FlashCardCreateWithoutFK_FlashCardStackInput } from "../inputs/FlashCardCreateWithoutFK_FlashCardStackInput";
import { FlashCardWhereUniqueInput } from "../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardCreateNestedManyWithoutFK_FlashCardStackInput", {
  isAbstract: true
})
export class FlashCardCreateNestedManyWithoutFK_FlashCardStackInput {
  @TypeGraphQL.Field(_type => [FlashCardCreateWithoutFK_FlashCardStackInput], {
    nullable: true
  })
  create?: FlashCardCreateWithoutFK_FlashCardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardCreateOrConnectWithoutFK_FlashCardStackInput], {
    nullable: true
  })
  connectOrCreate?: FlashCardCreateOrConnectWithoutFK_FlashCardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardCreateManyFK_FlashCardStackInputEnvelope, {
    nullable: true
  })
  createMany?: FlashCardCreateManyFK_FlashCardStackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashCardWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashCardWhereUniqueInput[] | undefined;
}
