import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope } from "../inputs/FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope";
import { FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewScalarWhereInput } from "../inputs/FlashcardReviewScalarWhereInput";
import { FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput", {
  isAbstract: true
})
export class FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput {
  @TypeGraphQL.Field(_type => [FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput], {
    nullable: true
  })
  create?: FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackReviewInput], {
    nullable: true
  })
  upsert?: FlashcardReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  set?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackReviewInput], {
    nullable: true
  })
  update?: FlashcardReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardStackReviewInput], {
    nullable: true
  })
  updateMany?: FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardStackReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashcardReviewScalarWhereInput[] | undefined;
}
